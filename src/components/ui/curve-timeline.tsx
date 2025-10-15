"use client"

import { motion } from "framer-motion"

const stages = [
  {
    title: "Idea generation",
    subtitle: "Research and shape"
  },
  {
    title: "MVP",
    subtitle: "Build and test"
  },
  {
    title: "Product-market fit",
    subtitle: "Refine and monetize"
  },
  {
    title: "Product growth",
    subtitle: "Scale and optimize"
  }
]

export function CurveTimeline() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-16">
      {/* Timeline Track */}
      <div className="relative">
        {/* Progressive Line Drawing */}
        {stages.map((stage, index) => {
          const lineWidth = ((index + 1) / stages.length) * 100
          const delay = index * 0.8 // 0.8s delay between each stage (faster)
          
          return (
            <div key={`line-container-${index}`} className="relative">
              <motion.div 
                className="absolute top-2 left-0 h-3" 
                 style={{ 
                   width: `${lineWidth}%`,
                   background: "linear-gradient(to right, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.6))"
                 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  delay: delay, 
                  duration: 0.5, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Lightning Spark Effect */}
              <motion.div
                className="absolute top-1 left-0 w-2 h-5 bg-gradient-to-b from-primary/80 via-white to-primary/60 rounded-full shadow-lg"
                 style={{ 
                   boxShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))"
                 }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ 
                  x: `${lineWidth}%`,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  delay: delay,
                  duration: 0.5,
                  ease: "easeInOut",
                  opacity: {
                    times: [0, 0.3, 1],
                    duration: 0.5
                  }
                }}
              />
              
              {/* Additional Spark Particles */}
              {[...Array(3)].map((_, sparkIndex) => (
                <motion.div
                  key={`spark-${index}-${sparkIndex}`}
                  className="absolute top-0 w-1 h-1 bg-white rounded-full"
                   style={{ 
                     boxShadow: "0 0 6px hsl(var(--primary)), 0 0 12px hsl(var(--primary))"
                   }}
                  initial={{ 
                    x: 0, 
                    y: 2 + sparkIndex * 2,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    x: `${lineWidth}%`,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    delay: delay + sparkIndex * 0.05,
                    duration: 0.4,
                    ease: "easeInOut",
                    opacity: {
                      times: [0, 0.4, 1],
                      duration: 0.4
                    },
                    scale: {
                      times: [0, 0.4, 1],
                      duration: 0.4
                    }
                  }}
                />
              ))}
            </div>
          )
        })}
        
        {/* Stages Container */}
        <div className="relative flex justify-between items-start">
          {stages.map((stage, index) => {
            const baseDelay = index * 0.8 // 0.8s delay between each stage (faster)
            
            return (
              <motion.div 
                key={index} 
                className="flex flex-col items-center" 
                style={{ width: '200px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: baseDelay + 0.2, duration: 0.3 }}
              >
                {/* Dot */}
                <motion.div 
                  className="w-6 h-6 bg-primary rounded-full flex-shrink-0 shadow-lg border-2 border-background z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: baseDelay + 0.3, // Wait for line to reach the dot
                    duration: 0.3, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                />
                
                {/* Vertical Line */}
                <motion.div 
                  className="w-0.5 h-12 bg-primary/30"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ 
                    delay: baseDelay + 0.4, 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                />
                
                {/* Content */}
                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: baseDelay + 0.5, 
                    duration: 0.3 
                  }}
                >
                  <h3 className="text-base font-bold text-white mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-white">
                    {stage.subtitle}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
