/// <reference types="@cloudflare/workers-types" />

interface Env {
    DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    try {
        const formData = await context.request.formData();

        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const message = formData.get('message')?.toString().trim();

        // Validation
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'All fields are required.',
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders },
                }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Invalid email format.',
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders },
                }
            );
        }

        // Insert into D1
        await context.env.DB.prepare(
            'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)'
        )
            .bind(name, email, message)
            .run();

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Message received successfully.',
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
            }
        );
    } catch (error) {
        console.error('D1 Error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                error: 'Server error. Please try again later.',
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
            }
        );
    }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
};
