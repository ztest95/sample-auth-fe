import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Star, Menu } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        {/* <Link href="/" className="flex items-center justify-center">
          <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="ml-2 font-semibold">Logo</span>
        </Link> */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link> */}
        </nav>
        <Button variant="ghost" size="icon" className="ml-auto md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  New Release
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transform Your Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover innovative solutions designed to streamline your workflow and enhance productivity. Built for
                  modern teams who value efficiency and quality.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive features designed to meet your needs and exceed expectations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Reliable Performance</CardTitle>
                  <CardDescription>
                    Consistent and dependable results you can count on, every single time.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Premium Quality</CardTitle>
                  <CardDescription>
                    Exceptional standards maintained across all aspects of our offering.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Easy Integration</CardTitle>
                  <CardDescription>Seamlessly fits into your existing workflow without disruption.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Industry Leaders</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers who have transformed their operations.
                </p>
              </div>
              <div className="grid w-full grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 lg:gap-12 py-8">
                {/* <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    width="120"
                    height="60"
                    alt="Company Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    width="120"
                    height="60"
                    alt="Company Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    width="120"
                    height="60"
                    alt="Company Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=120"
                    width="120"
                    height="60"
                    alt="Company Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What People Are Saying</h2>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12 py-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "Outstanding results that exceeded our expectations. The quality and attention to detail is
                      remarkable."
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-muted rounded-full" />
                      <div>
                        <p className="text-sm font-medium">Alex Johnson</p>
                        <p className="text-xs text-muted-foreground">Operations Manager</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "Seamless integration and exceptional support. This has transformed how we approach our daily
                      operations."
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-muted rounded-full" />
                      <div>
                        <p className="text-sm font-medium">Sarah Chen</p>
                        <p className="text-xs text-muted-foreground">Team Lead</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      "Reliable, efficient, and exactly what we needed. The results speak for themselves."
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-muted rounded-full" />
                      <div>
                        <p className="text-sm font-medium">Michael Torres</p>
                        <p className="text-xs text-muted-foreground">Director</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers and experience the difference today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Get started today. No commitment required.{" "}
                  {/* <Link href="#" className="underline underline-offset-2 hover:text-primary">
                    Terms apply
                  </Link> */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Company Name. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {/* <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Support
          </Link> */}
        </nav>
      </footer>
    </div>
  )
}
