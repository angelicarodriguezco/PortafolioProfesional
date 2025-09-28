"use client"

import { motion } from "framer-motion"

export default function LogotipoSVGComponent() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <svg 
        width="200" 
        height="120" 
        viewBox="0 0 200 120" 
        className="w-full h-full max-w-xs"
      >
        {/* Llaves {} */}
        <motion.text
          x="100"
          y="50"
          textAnchor="middle"
          className="text-5xl font-bold fill-gray-700"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {"{}"}
        </motion.text>
        
        {/* Texto */}
        <motion.text
          x="100"
          y="90"
          textAnchor="middle"
          className="text-sm font-medium fill-gray-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Code, Create, Connect.
        </motion.text>
      </svg>
    </motion.div>
  )
}
