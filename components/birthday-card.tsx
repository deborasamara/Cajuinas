import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface Person {
  id: number
  name: string
  date: string
  photo: string
  role: string
}

interface BirthdayCardProps {
  person: Person
}

export function BirthdayCard({ person }: BirthdayCardProps) {
  return (
    <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={person.photo || "/placeholder.svg"}
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-bold text-primary text-balance group-hover:text-pink transition-colors">
          {person.name}
        </h3>

        <p className="text-sm text-muted-foreground font-medium">{person.role}</p>

        <div className="flex items-center gap-2 pt-2 border-t border-primary/10">
          <Calendar className="w-4 h-4 text-pink" />
          <span className="text-lg font-semibold text-primary-dark">{person.date}</span>
        </div>
      </div>
    </Card>
  )
}
