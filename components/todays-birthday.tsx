import { Card } from "@/components/ui/card"
import { Sparkles, Cake, Heart } from "lucide-react"

interface Person {
  id: number
  name: string
  date: string
  photo: string
  role: string
}

interface TodaysBirthdayProps {
  person: Person
}

export function TodaysBirthday({ person }: TodaysBirthdayProps) {
  return (
    <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white via-pink-light/30 to-peach-light/40 backdrop-blur-md border-2 border-primary/20 overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
        {/* Photo Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-pink to-orange rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-xl">
            <img
              src={person.photo || "/placeholder.svg"}
              alt={person.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Floating decorations */}
          <div className="absolute -top-4 -right-4 text-6xl animate-bounce" style={{ animationDuration: "3s" }}>
            🎉
          </div>
          <div
            className="absolute -bottom-4 -left-4 text-5xl animate-bounce"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          >
            🎈
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-pink">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">Parabéns!</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-primary text-balance leading-tight">{person.name}</h3>

            <p className="text-xl text-primary-dark font-medium">{person.role}</p>
          </div>

          <div className="flex items-center gap-3 text-2xl font-semibold text-pink">
            <Cake className="w-7 h-7" />
            <span>{person.date}</span>
          </div>

          <div className="pt-6 border-t border-primary/10">
            <p className="text-lg text-primary-dark leading-relaxed text-pretty">
              Que seu dia seja repleto de alegria, conquistas e momentos especiais! Você ilumina a comunidade Cajuínas
              com sua força e criatividade.
            </p>
            <div className="mt-4 flex items-center gap-2 text-pink">
              <Heart className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Com carinho, Cajuínas</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
