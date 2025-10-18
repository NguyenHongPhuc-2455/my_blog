"use client"

import { X } from "lucide-react"
import Image from "next/image"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificateImage: string
  courseName: string
}

export function CertificateModal({ isOpen, onClose, certificateImage, courseName }: CertificateModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors z-10"
        >
          <X size={24} className="text-foreground" />
        </button>

        {/* Certificate Content */}
        <div className="p-8">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">{courseName}</h2>
          <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
            <Image
              src={certificateImage || "/placeholder.svg"}
              alt={`${courseName} Certificate`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-muted-foreground mt-6">Certificate of Completion</p>
        </div>
      </div>
    </div>
  )
}
