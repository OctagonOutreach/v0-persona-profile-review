"use client"

import { forwardRef, type ButtonHTMLAttributes } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useModal } from "@/components/modal/modal-provider"

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "default" | "lg"
  pulse?: boolean
  asChild?: boolean
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, size = "default", pulse = false, children, onClick, ...props }, ref) => {
    const { openModal } = useModal()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e)
      }
      openModal()
    }

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      default: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg",
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90 transition-colors duration-200",
          "shadow-lg hover:shadow-primary/30",
          pulse && "cta-pulse",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
CTAButton.displayName = "CTAButton"

export { CTAButton }
