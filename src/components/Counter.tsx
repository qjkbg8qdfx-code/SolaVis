"use client"

import { useEffect, useState, useRef } from 'react'

interface CounterProps {
    value: number
    suffix?: string
    duration?: number
    decimals?: number
}

export default function Counter({ value, suffix = "", duration = 1500, decimals = 0 }: CounterProps) {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    const startTimeRef = useRef<number | null>(null)
    const [isInView, setIsInView] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            { threshold: 0.1 }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isInView) return

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp
            const progress = timestamp - startTimeRef.current

            if (progress < duration) {
                const percentage = progress / duration
                // Ease out cubic
                const ease = 1 - Math.pow(1 - percentage, 3)

                setCount(value * ease)
                requestAnimationFrame(animate)
            } else {
                setCount(value)
            }
        }

        requestAnimationFrame(animate)
    }, [isInView, value, duration])

    return (
        <span ref={elementRef} className="tabular-nums font-mono">
            {count.toFixed(decimals)}{suffix}
        </span>
    )
}
