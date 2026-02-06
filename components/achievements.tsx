"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, Trophy, Star, Medal } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useIsMobile } from "@/hooks/use-mobile" // Import useIsMobile hook

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null)
  const [api, setApi] = useState<CarouselApi>()
  const isMobile = useIsMobile() // Get mobile state

  const achievements = [
    {
      title: "Published Two Patents",
      organization: "Indian Patent Office | Journal No. 202321074996A",
      description:
        "Geographically Targeted Alert System for Dengue Prevention- A patent leveraging data analytics and GIS to deliver location-based alerts for dengue prevention",
      image: "/images/patent-dengue-alert-system.jpeg",
      date: "2023",
      icon: Award,
      category: "Patent Published",
    },
    {
      title: "Openserv Hackathon 2025",
      organization: "OpenServ – International DeFi Hackathon",
      description:
        "Winner among 2000+ teams in an international DeFi hackathon. Developed ASSURFI, an innovative blockchain solution for decentralized finance.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-25%20at%2019.20.03_6800a64c.jpg-9QD9bT0CkRWgUXLQvMRF1rZMJYgbya.jpeg",
      amount: "₹3.5 Lakh",
      date: "2025",
      icon: Trophy,
      category: "International",
    },
    {
      title: "InnovateYou Techathon",
      organization: "InnovateYou",
      description:
        "National winner among 200+ teams for presenting MEDIAR, a healthtech solution demonstrating innovative technology and real-world impact.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InnovateYou%20Techathon-QCbNVR5LxoGkKF8ccE9BHhBAIo3P4k.png",
      amount: "₹2 Lakh",
      date: "2024",
      icon: Award,
      category: "National",
    },
    {
      title: "PanIIT PIWOT Hackathon",
      organization: "PanIIT Alumni India",
      description:
        "Winner among 16,000+ participants in the prestigious PanIIT Hackathon, recognized for exceptional technical innovation and advanced problem-solving.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/piwot%20pan-iit-5WJxktMy1u7GaKFmeDjlTjLbZXK3FC.png",
      amount: "₹75,000",
      date: "2025",
      icon: Medal,
      category: "Competition",
    },
    {
      title: "KnowCode Hackathon",
      organization: "KJSIT Mumbai",
      description:
        "1st Runner-up among 150+ teams, recognized for innovative software solutions and strong problem-solving in real-world challenges.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Knowcosde.jpg-B1MoujI36yQVcvEiyVINjXIT8XvmDt.jpeg",
      amount: "₹15,000",
      date: "2024",
      icon: Trophy,
      category: "Competition",
    },
    {
      title: "HackCelestial 1.0",
      organization: "Pillai College of Engineering",
      description:
        "Top 5 winner for innovative prototype development, showcasing creative AR-based tech solutions with real-world applications.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hackcelestial.png-rFf4lG6U8OoFWz1Vl3I5KL8vdp0lcK.jpeg",
      amount: "₹10,000",
      date: "2024",
      icon: Star,
      category: "Innovation",
    },
    {
      title: "World Record Award – AR Physics Textbook",
      organization: "World Record India",
      description:
        "Led the development of a 107-page AR Physics Textbook in 3 months. Recognized by World Record India for breakthrough innovation in educational technology.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WOrld%20recored%202-ItLpzhrPYzJxMYDzkTtcAoND2Ck8VS.png",
      date: "2023",
      icon: Award,
      category: "World Record",
    },
  ]

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap
        gsap.registerPlugin((window as any).ScrollTrigger)

        if (isMobile) {
          // Apply animations only on mobile
          // Achievements section animation (for the whole carousel container)
          gsap.fromTo(
            sectionRef.current,
            {
              opacity: 0,
              y: 60,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
              },
            },
          )
        } else {
          // For desktop, ensure elements are visible by default
          if (sectionRef.current) sectionRef.current.style.opacity = "1"
        }
      }
    }

    const checkGSAP = () => {
      if ((window as any).gsap && (window as any).ScrollTrigger) {
        initAnimations()
      } else {
        setTimeout(checkGSAP, 100)
      }
    }

    checkGSAP()
  }, [isMobile]) // Re-run effect if isMobile changes

  // Auto-scroll logic for achievements carousel
  useEffect(() => {
    if (!api) return

    let autoplay: NodeJS.Timeout

    const startAutoplay = () => {
      autoplay = setInterval(() => {
        api.scrollNext()
      }, 3000) // Change slide every 3 seconds
    }

    const stopAutoplay = () => {
      clearInterval(autoplay)
    }

    api.on("pointerDown", stopAutoplay) // Stop on user interaction
    api.on("pointerUp", startAutoplay) // Resume after user interaction
    api.on("select", () => {
      // Restart autoplay on manual slide change
      stopAutoplay()
      startAutoplay()
    })

    startAutoplay() // Start autoplay initially

    return () => {
      stopAutoplay()
      api.off("pointerDown", stopAutoplay)
      api.off("pointerUp", startAutoplay)
      api.off("select", () => {
        stopAutoplay()
        startAutoplay()
      })
    }
  }, [api])

  return (
    <section ref={sectionRef} id="achievements" className="py-8 relative scroll-mt-20">
      {/* Background orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-3xl font-bold mb-2">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto font-light">
            Recognition and awards I've received for my work and contributions
          </p>
        </div>

        {/* Achievements Carousel */}
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full relative">
          <CarouselContent className="-ml-4">
            {achievements.map((achievement, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="glass-card p-3 rounded-lg h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-md mb-3 group">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      width={250}
                      height={150}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                      <achievement.icon className="h-5 w-5 text-yellow-400 neon-glow" />
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="glass px-2 py-0.5 rounded-full text-cyan-400 text-[10px] font-medium">
                        {achievement.category}
                      </span>
                    </div>
                  </div>

                  <div className="mb-2 flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      {achievement.amount && (
                        <span className="glass px-2 py-0.5 rounded-full text-green-400 text-[10px] font-medium neon-glow">
                          {achievement.amount}
                        </span>
                      )}
                    </div>
                    <h3 className="gradient-text mb-1 text-sm font-semibold">{achievement.title}</h3>
                    <p className="text-cyan-400 font-medium text-[10px]">
                      {achievement.organization} • {achievement.date}
                    </p>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-xs font-light">{achievement.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
        </Carousel>

        {/* Additional Info */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm mb-2 font-light">
            🏆 <span className="gradient-text font-semibold">7-time hackathon winner</span> across national and
            international competitions
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-[10px]">
            {[
              "Health-Tech solutions",
              "Sustainability solutions",
              "DeFi Innovation",
              "AR Innovation",
              "GenAI Solutions",
            ].map((tag, i) => (
              <span key={i} className="glass px-2 py-0.5 rounded-full text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
