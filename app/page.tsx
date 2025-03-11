import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Database, LineChart, Users, Zap, ArrowRight, Globe, Shield } from "lucide-react"
import Image from "next/image"
import { TestimonialCard } from "@/components/testimonial-card"
import { TeamMember } from "@/components/team-member"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Unlock the Power of Your Data
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  DataDip transforms your raw data into actionable insights, helping your business make smarter
                  decisions and drive growth.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/image.webp?height=550&width=550"
                width={550}
                height={550}
                alt="Data visualization dashboard"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Data Solutions for Every Need</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer comprehensive data consultancy services to help businesses leverage their data assets
                effectively.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Database className="h-8 w-8 text-gray-800" />
                <div>
                  <CardTitle>Data Architecture</CardTitle>
                  <CardDescription>Design scalable data infrastructure</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We design and implement robust data architectures that scale with your business needs, ensuring
                  efficient data storage and retrieval.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1 text-gray-700 hover:text-black">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BarChart3 className="h-8 w-8 text-gray-800" />
                <div>
                  <CardTitle>Data Analytics</CardTitle>
                  <CardDescription>Transform data into insights</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our analytics services help you understand patterns and trends in your data, providing actionable
                  insights for strategic decision-making.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1 text-gray-700 hover:text-black">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <LineChart className="h-8 w-8 text-gray-800" />
                <div>
                  <CardTitle>Predictive Modeling</CardTitle>
                  <CardDescription>Forecast future trends</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Leverage advanced statistical techniques and machine learning to predict future outcomes and identify
                  opportunities for growth.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1 text-gray-700 hover:text-black">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-gray-800" />
                <div>
                  <CardTitle>Data Integration</CardTitle>
                  <CardDescription>Connect disparate data sources</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We seamlessly integrate data from multiple sources, creating a unified view of your business
                  operations and customer interactions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1 text-gray-700 hover:text-black">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Globe className="h-8 w-8 text-gray-800" />
                <div>
                  <CardTitle>Big Data Solutions</CardTitle>
                  <CardDescription>Handle massive data volumes</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our big data expertise helps you process, analyze, and derive value from large volumes of structured
                  and unstructured data.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1 text-gray-700 hover:text-black">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-8 w-8 text-gray-800" />
                <div>
                  <CardTitle>Data Governance</CardTitle>
                  <CardDescription>Ensure data quality and compliance</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We implement robust data governance frameworks to ensure data quality, security, and regulatory
                  compliance across your organization.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-1 text-gray-700 hover:text-black">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/image.webp?height=400&width=600"
                width={600}
                height={400}
                alt="DataDip team working"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Trusted Data Partner</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2023, DataDip has quickly established itself as a leader in data consultancy, helping
                  businesses across industries harness the power of their data.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-gray-500">
                  To empower organizations with data-driven insights that drive innovation, efficiency, and competitive
                  advantage.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Approach</h3>
                <p className="text-gray-500">
                  We combine technical expertise with business acumen to deliver practical solutions that address your
                  specific challenges and opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of data scientists, engineers, and analysts brings decades of combined experience to solve your
                most complex data challenges.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Alex Johnson"
              role="Founder & CEO"
              bio="Former data science lead at Google with 15+ years of experience in big data and analytics."
              imageSrc="/image.webp?height=300&width=300"
            />
            <TeamMember
              name="Sarah Chen"
              role="Chief Data Scientist"
              bio="PhD in Machine Learning with expertise in predictive modeling and natural language processing."
              imageSrc="/image.webp?height=300&width=300"
            />
            <TeamMember
              name="Michael Rodriguez"
              role="Head of Data Engineering"
              bio="Specialized in building scalable data pipelines and cloud-based data infrastructure."
              imageSrc="/image.webp?height=300&width=300"
            />
            <TeamMember
              name="Priya Patel"
              role="Lead Data Analyst"
              bio="Expert in translating complex data into actionable business insights across industries."
              imageSrc="/image.webp?height=300&width=300"
            />
            <TeamMember
              name="David Kim"
              role="Data Governance Specialist"
              bio="Certified in data privacy regulations with experience implementing governance frameworks."
              imageSrc="/image.webp?height=300&width=300"
            />
            <TeamMember
              name="Emma Wilson"
              role="Client Success Manager"
              bio="Dedicated to ensuring clients achieve their data objectives and maximize ROI."
              imageSrc="/image.webp?height=300&width=300"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our clients have to say about working with DataDip.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="DataDip transformed our approach to customer data, leading to a 30% increase in retention and significant revenue growth."
              author="Jennifer Lee"
              company="CEO, TechNova"
            />
            <TestimonialCard
              quote="The predictive models developed by DataDip have revolutionized our inventory management, reducing costs by 25% while improving availability."
              author="Robert Chen"
              company="COO, RetailPlus"
            />
            <TestimonialCard
              quote="Working with DataDip gave us the insights we needed to enter new markets with confidence. Their analysis was spot-on."
              author="Marcus Johnson"
              company="VP Strategy, GlobalTrade"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Dive Deeper?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team to discuss how DataDip can help you unlock the full potential of your data.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-800" />
                  <span>Alicante</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-800"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(+34) 628 736 405</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-800"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@datadip.es</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Ready to Transform Your Data?
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join hundreds of businesses that have unlocked the power of their data with DataDip.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                <Link href="#contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">DataDip</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-blue-400 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="hover:text-blue-400 transition-colors">
                    Data Architecture
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-blue-400 transition-colors">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-blue-400 transition-colors">
                    Predictive Modeling
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Whitepapers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 DataDip. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

