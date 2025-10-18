'use client';

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"
import { CertificateModal } from "@/components/certificate-modal"

export default function About() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    image: string
    name: string
  } | null>(null)

  const courses = [
    {
      id: 1,
      name: "JavaScript Essentials 1",
      category: "Programming",
      description: "Fundamentals of JavaScript including variables, functions, and DOM manipulation",
      credits: 3,
      status: "completed",
      hasCertificate: true,
      certificateImage: "/java1.png",
    },
    {
      id: 2,
      name: "JavaScript Essentials 2",
      category: "Programming",
      description: "Advanced JavaScript concepts including async/await, promises, and ES6+ features",
      credits: 3,
      status: "completed",
      hasCertificate: true,
      certificateImage: "/java2.png",
    },
    {
      id: 3,
      name: "Networking Basics",
      category: "Backend",
      description: "Fundamentals of computer networks, protocols, and network architecture",
      credits: 3,
      status: "completed",
      hasCertificate: true,
      certificateImage: "/network.png",
    },
    {
      id: 4,
      name: "React Basics",
      category: "Frontend",
      description: "Introduction to React components, hooks, and state management",
      credits: 4,
      status: "completed",
      hasCertificate: false,
    },
    {
      id: 5,
      name: "Web Design Principles",
      category: "Design",
      description: "UI/UX design fundamentals and responsive web design techniques",
      credits: 3,
      status: "completed",
      hasCertificate: false,
    },
    {
      id: 6,
      name: "Database Design",
      category: "Backend",
      description: "SQL databases, normalization, and query optimization",
      credits: 4,
      status: "completed",
      hasCertificate: false,
    },
  ]

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0)
  const categories = [...new Set(courses.map((c) => c.category))]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-balance">About Me</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                I'm a passionate learner and developer dedicated to continuous growth and mastering modern web
                technologies. Here's a summary of my educational journey and the skills I've acquired.
              </p>
            </div>
          </div>
        </section> */}

        {/* Stats Section */}
        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">{courses.length}</div>
              <p className="text-muted-foreground">Courses Completed</p>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">{totalCredits}</div>
              <p className="text-muted-foreground">Total Credits</p>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-4xl font-serif font-bold text-primary mb-2">{categories.length}</div>
              <p className="text-muted-foreground">Categories</p>
            </div>
          </div>
        </section> */}

        {/* Courses Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-balance text-center">
            Khóa học & Chứng chỉ của tôi
          </h2>

          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-foreground mb-6 pb-3 border-b border-border">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses
                    .filter((course) => course.category === category)
                    .map((course) => (
                      <div
                        key={course.id}
                        onClick={() => {
                          if (course.hasCertificate) {
                            setSelectedCertificate({
                              image: course.certificateImage ?? "/path/to/default-image.png",
                              name: course.name,
                            })
                          }
                        }}
                        className={`bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ${
                          course.hasCertificate ? "cursor-pointer hover:bg-muted/80" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-foreground mb-2">{course.name}</h4>
                            <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                          </div>
                          <CheckCircle2 className="text-primary flex-shrink-0 ml-4" size={24} />
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm font-medium text-muted-foreground">{course.credits} Credits</span>
                          <div className="flex gap-2">
                            {course.hasCertificate && (
                              <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">
                                View Certificate
                              </span>
                            )}
                            <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
                              Completed
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 mt-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold mb-4 text-balance">Let's Connect</h2>
            <p className="text-lg mb-8 opacity-90">
            Bạn muốn cộng tác hoặc tìm hiểu thêm về công việc của tôi? Hãy thoải mái tiếp cận!
            </p>
            <button className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get In Touch
            </button>
          </div>
        </section>
      </main>

      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        certificateImage={selectedCertificate?.image || ""}
        courseName={selectedCertificate?.name || ""}
      />

      <Footer />
    </div>
  )
}
