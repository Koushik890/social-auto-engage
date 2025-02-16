import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function AnswerQuestionsCard() {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-[#D3B9FF] to-[#E5CCFF] rounded-2xl border border-[#E0D5FF] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-200 overflow-hidden backdrop-blur-sm",
        "h-[156px]"
      )}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-filter backdrop-blur-sm" />
      <div className="relative h-full p-6">
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="mb-auto">
            <h3 className="text-lg font-semibold text-[#5E2D9E] mb-0">
              Answer Questions with AI
            </h3>
            <p className="text-sm text-[#7E7E9A]">
              Identify and respond to queries with AI
            </p>
          </div>

          {/* Footer Section */}
          <div className="flex items-center justify-between text-xs text-[#7E7E9A]">
            <span className="pr-4 leading-relaxed">The intention of the message will be automatically detected</span>
            <Link 
              href="/dashboard/ai-responses"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#6B47FF] text-white flex-shrink-0 transition-transform hover:scale-105 hover:shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
