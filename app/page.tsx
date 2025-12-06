"use client";
import { BirthdayCard } from "@/components/birthday-card";
import { TodaysBirthday } from "@/components/todays-birthday";
import { CashewDecoration } from "@/components/cashew-decoration";
import { BackgroundMusic } from "@/components/background-music";
import { Card } from "@/components/ui/card";

// Sample birthday data - replace with your actual data
const birthdays = [
  {
    id: 1,
    name: "Ana Silva",
    date: "05/12",
    month: 12,
    day: 5,
    photo: "/professional-woman-smiling.png",
    role: "Desenvolvedora Frontend",
  },
  {
    id: 2,
    name: "Beatriz Santos",
    date: "12/12",
    month: 12,
    day: 12,
    photo: "/woman-developer-portrait.png",
    role: "Engenheira de Software",
  },
  {
    id: 3,
    name: "Carla Oliveira",
    date: "18/12",
    month: 12,
    day: 18,
    photo: "/tech-professional-woman.jpg",
    role: "Designer UX/UI",
  },
  {
    id: 4,
    name: "Diana Costa",
    date: "22/12",
    month: 12,
    day: 22,
    photo: "/woman-programmer-smiling.jpg",
    role: "Tech Lead",
  },
  {
    id: 5,
    name: "Elena Ferreira",
    date: "28/12",
    month: 12,
    day: 28,
    photo: "/software-engineer-woman.jpg",
    role: "Desenvolvedora Backend",
  },
  {
    id: 6,
    name: "Elena Ferreira",
    date: "06/12",
    month: 12,
    day: 6,
    photo: "/software-engineer-woman.jpg",
    role: "Desenvolvedora Backend",
  },
  {
    id: 7,
    name: "Juliana Maria",
    date: "06/12",
    month: 12,
    day: 6,
    photo: "/software-engineer-woman.jpg",
    role: "Desenvolvedora Backend",
  },
];

export default function BirthdayWall() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  // Find today's birthday person
  const todaysBirthdays = birthdays.filter(
    (person) => person.month === currentMonth && person.day === currentDay
  );

  // Get all birthdays for current month
  const monthBirthdays = birthdays
  .filter((person) => person.month === currentMonth)
  // Adiciona o método .sort() para ordenar
  .sort((a, b) => a.day - b.day);

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-peach-light to-pink-light relative overflow-hidden">
      <BackgroundMusic />

      {/* Decorative cashews floating in background */}
      <CashewDecoration
        className="absolute top-10 left-10 opacity-20"
        size="large"
      />
      <CashewDecoration
        className="absolute top-40 right-20 opacity-15"
        size="medium"
      />
      <CashewDecoration
        className="absolute bottom-20 left-1/4 opacity-10"
        size="small"
      />
      <CashewDecoration
        className="absolute bottom-40 right-10 opacity-20"
        size="medium"
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <header className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-6">
            <img
              src="/images/cajuinas-logo.png"
              alt="Cajuínas - Mulheres na Tecnologia"
              className="h-24 w-auto mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">
            🎉 Mural de Aniversários
          </h1>
          <p className="text-xl text-primary-dark max-w-2xl mx-auto text-pretty leading-relaxed">
            Celebrando as mulheres fortes, criativas e apaixonadas por
            tecnologia
          </p>
        </header>

        {/* Today's Birthday - Featured */}
        {todaysBirthdays.length > 0 && (
          <section className="mb-20 animate-slideUp">
               {" "}
            <h2 className="text-4xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
                    <span>✨</span>      <span>Aniversariantes do Dia</span>{" "}
              {/* Mudei para plural! */}      <span>✨</span>   {" "}
            </h2>
               {" "}
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {" "}
              {/* Adicionei um grid para melhor layout */}     {" "}
              {todaysBirthdays.map((person) => (
                <TodaysBirthday key={person.id} person={person} />
              ))}
                 {" "}
            </div>
             {" "}
          </section>
        )}

        {/* Monthly Birthdays */}
        <section className="animate-fadeIn" style={{ animationDelay: "200ms" }}>
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            🎂 Aniversariantes de {monthNames[currentMonth - 1]}
          </h2>

          {monthBirthdays.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {monthBirthdays.map((person, index) => (
                <div
                  key={person.id}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <BirthdayCard person={person} />
                </div>
              ))}
            </div>
          ) : (
            <Card className="max-w-md mx-auto p-8 text-center bg-white/80 backdrop-blur-sm border-primary/20">
              <p className="text-muted-foreground text-lg">
                Nenhum aniversário este mês 🎈
              </p>
            </Card>
          )}
        </section>

        {/* Footer Message */}
        <footer
          className="mt-20 text-center animate-fadeIn"
          style={{ animationDelay: "600ms" }}
        >
          <div className="max-w-3xl mx-auto p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-primary/10">
            <p className="text-lg text-primary-dark leading-relaxed text-pretty italic">
              "As Cajuínas são mulheres que acolhem, incentivam, empoderam e
              capacitam. Unidos pela tecnologia, fortalecidas pela sororidade,
              orgulhosas de nossas raízes nordestinas."
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
