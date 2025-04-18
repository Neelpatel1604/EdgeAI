import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X, Server, Lock, Zap, BarChart3, RefreshCw, Cpu, Brain, Eye } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
            <span className="text-[#9f5396] dark:text-[#b67bad] text-xl font-bold">
              Edge AI Innovations
            </span>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#9f5396]/20 to-[#9f5396]/50 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            AI Assistants
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Create custom AI assistants trained on your own data
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                          <div className="text-sm font-medium leading-none">Edge Computing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Deploy AI solutions on edge devices
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                          <div className="text-sm font-medium leading-none">Machine Learning</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Custom ML models for business challenges
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="#">
                          <div className="text-sm font-medium leading-none">Computer Vision</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Advanced image and video analysis
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="#company-overview">
                  Company
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" href="#community">
                  Community
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-4">
            <Button variant="outline">Log In</Button>
            <Button className="bg-[#9f5396] hover:bg-[#8a4681] text-white">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9f5396]/30 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#9f5396]/20 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#9f5396] dark:text-[#b67bad]">
                Create your own <span className="relative">
                  <span className="relative z-10">AI Assistants</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#9f5396]/20 rounded-lg -z-0"></span>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-md">
                Build custom AI assistants powered by your own data. Deploy anywhere with enhanced privacy and zero server costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#9f5396] hover:bg-[#8a4681] text-white text-lg px-8 py-6 h-auto">
                  Try it now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                  Book a demo
                </Button>
              </div>
              
              <div className="pt-4 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <div className="bg-[#9f5396]/20 h-full w-full"></div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">500+</span> businesses trust Edge AI Innovations
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-card to-background rounded-lg border p-4 shadow-xl">
                <div className="absolute -top-12 -left-12">
                  <div className="bg-background border shadow rounded-lg p-3 w-24">
                    <div className="h-2 w-12 bg-[#9f5396]/50 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-[#9f5396]/30 rounded"></div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-8">
                  <div className="bg-background border shadow rounded-lg p-3 w-20">
                    <div className="h-2 w-10 bg-[#9f5396]/50 rounded mb-1"></div>
                    <div className="h-2 w-14 bg-[#9f5396]/30 rounded"></div>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
                  <div className="bg-muted p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#9f5396]"></div>
                      <span className="text-sm font-medium">AI Assistant</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30"></div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#9f5396]/5 p-4 rounded-lg border border-[#9f5396]/20">
                        <h3 className="text-sm font-medium text-[#9f5396]">Upload Documents</h3>
                        <div className="mt-2 h-12 bg-[#9f5396]/10 rounded flex items-center justify-center">
                          <div className="h-6 w-6 rounded-full bg-[#9f5396]/20 flex items-center justify-center">
                            <ArrowRight className="h-3 w-3 text-[#9f5396]" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="text-sm font-medium">Select AI Model</h3>
                        <div className="mt-2 h-12 bg-muted-foreground/10 rounded flex items-center justify-center">
                          <div className="h-6 w-6 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                            <ArrowRight className="h-3 w-3 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="text-sm font-medium">Customize Prompts</h3>
                        <div className="mt-2 h-12 bg-muted-foreground/10 rounded flex items-center justify-center">
                          <div className="h-6 w-6 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                            <ArrowRight className="h-3 w-3 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg border">
                        <h3 className="text-sm font-medium">Start Chatting</h3>
                        <div className="mt-2 h-12 bg-muted-foreground/10 rounded flex items-center justify-center">
                          <div className="h-6 w-6 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                            <ArrowRight className="h-3 w-3 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button className="w-full bg-[#9f5396] hover:bg-[#8a4681] text-white">
                        Create Assistant
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9f5396]/10 to-[#9f5396]/30 rounded-full blur-3xl opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Steps Section - Enhanced with icons and better spacing */}
        <div className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#9f5396]">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-[#9f5396]/20 relative group hover:border-[#9f5396] transition-all">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#9f5396] text-white rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
                <div className="pt-2 pb-4">
                  <Lock className="h-6 w-6 text-[#9f5396] mb-2" />
                  <h3 className="text-lg font-medium text-[#9f5396]">Log in to Moorche Serverless RAG</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Secure access to our platform with enterprise-grade authentication</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm border border-[#9f5396]/20 relative group hover:border-[#9f5396] transition-all">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#9f5396] text-white rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
                <div className="pt-2 pb-4">
                  <Server className="h-6 w-6 text-[#9f5396] mb-2" />
                  <h3 className="text-lg font-medium text-[#9f5396]">Upload your Documents</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Upload PDFs, Word docs, or text files to train your assistant</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm border border-[#9f5396]/20 relative group hover:border-[#9f5396] transition-all">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#9f5396] text-white rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
                <div className="pt-2 pb-4">
                  <Brain className="h-6 w-6 text-[#9f5396] mb-2" />
                  <h3 className="text-lg font-medium text-[#9f5396]">Choose an AI model</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Select from multiple AI models optimized for different use cases</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm border border-[#9f5396]/20 relative group hover:border-[#9f5396] transition-all">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#9f5396] text-white rounded-full flex items-center justify-center font-bold shadow-lg">4</div>
                <div className="pt-2 pb-4">
                  <Zap className="h-6 w-6 text-[#9f5396] mb-2" />
                  <h3 className="text-lg font-medium text-[#9f5396]">Start chatting with your own data</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Interact with an AI that understands your specific content</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm border border-[#9f5396]/20 relative group hover:border-[#9f5396] transition-all">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#9f5396] text-white rounded-full flex items-center justify-center font-bold shadow-lg">5</div>
                <div className="pt-2 pb-4">
                  <RefreshCw className="h-6 w-6 text-[#9f5396] mb-2" />
                  <h3 className="text-lg font-medium text-[#9f5396]">Customize prompts (optional)</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Fine-tune your assistant's behavior with custom instructions</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm border border-[#9f5396]/20 relative group hover:border-[#9f5396] transition-all">
                <div className="absolute -top-4 -left-4 h-8 w-8 bg-[#9f5396] text-white rounded-full flex items-center justify-center font-bold shadow-lg">6</div>
                <div className="pt-2 pb-4">
                  <Cpu className="h-6 w-6 text-[#9f5396] mb-2" />
                  <h3 className="text-lg font-medium text-[#9f5396]">Use your AI chatbot anywhere</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Embed your assistant on websites, apps, or internal systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section id="value-props" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Edge AI Innovations?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cost-effectiveness */}
            <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
              <CardContent className="pt-6 relative">
                <div className="h-12 w-12 bg-[#9f5396]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9f5396]/20 transition-all">
                  <BarChart3 className="h-6 w-6 text-[#9f5396]" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 group-hover:text-[#9f5396] transition-all">Cost-Effective Solution</CardTitle>
                <CardDescription className="text-base">
                  Our serverless model eliminates continuous server costs, providing significant operational savings without compromising performance.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Privacy and Security */}
            <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-[#9f5396]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9f5396]/20 transition-all">
                  <Lock className="h-6 w-6 text-[#9f5396]" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 group-hover:text-[#9f5396] transition-all">Enhanced Privacy & Security</CardTitle>
                <CardDescription className="text-base">
                  Local data processing ensures your sensitive information stays secure, with no external server involvement in the process.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Ease of Implementation */}
            <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-[#9f5396]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9f5396]/20 transition-all">
                  <Zap className="h-6 w-6 text-[#9f5396]" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 group-hover:text-[#9f5396] transition-all">Simple Implementation</CardTitle>
                <CardDescription className="text-base">
                  User-friendly platform requiring minimal technical expertise to set up and operate effectively.
                </CardDescription>
              </CardContent>
            </Card>

            {/* The rest of your sections remain the same... */}
          </div>
        </div>
      </section>

      {/* The rest of your sections (Features, Company Overview, Leadership Team, Community) remain the same with minor styling improvements */}
      
      {/* Call to Action Section - New */}
      <section className="py-20 bg-gradient-to-br from-[#9f5396]/10 to-[#9f5396]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to build your custom AI assistant?</h2>
            <p className="text-lg text-muted-foreground">Start creating powerful AI solutions that understand your business and your data.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#9f5396] hover:bg-[#8a4681] text-white text-lg px-8 py-6 h-auto">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <span className="text-[#9f5396] dark:text-[#b67bad] text-lg font-bold">
                  Edge AI Innovations
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of AI with privacy-first, edge-based solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">AI Assistants</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Edge Computing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Machine Learning</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Computer Vision</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">About Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Leadership</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Careers</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Edge AI Course</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">GenAI Hackathon</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-[#9f5396]">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 Edge AI Innovations. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-[#9f5396]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#9f5396]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#9f5396]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Features Section */}
      <section id="solutions" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our AI Solutions
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Powerful AI technologies customized for your specific business needs, with a focus on privacy and edge computing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-[#9f5396]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9f5396]/20 transition-all">
                  <Cpu className="h-6 w-6 text-[#9f5396]" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 group-hover:text-[#9f5396] transition-all">Edge Computing</CardTitle>
                <CardDescription className="text-base">
                  Deploy AI solutions directly on edge devices for real-time processing and reduced latency. Perfect for IoT applications and environments with limited connectivity.
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-[#9f5396] hover:bg-[#9f5396]/10 p-0 h-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-[#9f5396]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9f5396]/20 transition-all">
                  <Brain className="h-6 w-6 text-[#9f5396]" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 group-hover:text-[#9f5396] transition-all">Machine Learning</CardTitle>
                <CardDescription className="text-base">
                  Custom ML models designed to solve your specific business challenges. Our models learn from your unique data to deliver tailored insights and predictions.
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-[#9f5396] hover:bg-[#9f5396]/10 p-0 h-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-[#9f5396]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9f5396]/20 transition-all">
                  <Eye className="h-6 w-6 text-[#9f5396]" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2 group-hover:text-[#9f5396] transition-all">Computer Vision</CardTitle>
                <CardDescription className="text-base">
                  Advanced image and video analysis for automation and insights. Detect objects, recognize patterns, and extract valuable information from visual data.
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-[#9f5396] hover:bg-[#9f5396]/10 p-0 h-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview Section - Enhanced */}
      <section id="company-overview" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Company Overview</h2>
              <div className="space-y-4">
                <p className="text-lg">Edge AI Innovations specializes in building customized AI assistants that operate on the edge, reducing latency and enhancing security. Our solutions bridge the gap between advanced AI technologies and their practical application in businesses of various sizes.</p>
                <h3 className="text-2xl font-semibold">Mission and Value Proposition</h3>
                <p className="text-lg">Our mission is centered around making advanced AI technology accessible, cost-effective, and efficient. We emphasize reducing the barriers typically associated with implementing AI, such as server infrastructure and high technical expertise requirements.</p>
                <div className="flex gap-4 mt-6">
                  <Button className="bg-[#9f5396] hover:bg-[#8a4681] text-white">
                    About Us
                  </Button>
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[#9f5396]/10 rounded-lg p-6 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#9f5396]">500+</div>
                      <div className="text-sm text-muted-foreground">Clients</div>
                    </div>
                  </div>
                  <div className="bg-[#9f5396]/10 rounded-lg p-6 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#9f5396]">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#9f5396]/10 rounded-lg p-6 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#9f5396]">95%</div>
                      <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                    </div>
                  </div>
                  <div className="bg-[#9f5396]/10 rounded-lg p-6 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#9f5396]">3+</div>
                      <div className="text-sm text-muted-foreground">Years in Business</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#9f5396]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section - Enhanced */}
      <section id="leadership" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-gradient-to-r from-[#9f5396]/20 to-[#9f5396]/40 flex items-center justify-center">
                <div className="h-24 w-24 bg-[#9f5396]/20 rounded-full flex items-center justify-center">
                  <svg className="h-12 w-12 text-[#9f5396]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2">Tara Khani</h3>
                <p className="text-lg font-medium text-muted-foreground mb-4">Co-Founder and CEO</p>
                <p className="text-base mb-4">With 17 years of experience in engineering and leadership, Tara brings expertise from major firms such as Keyence, Mitutoyo, and SOTI. Her background includes senior engineering roles, enterprise management, and deep understanding of customer needs.</p>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-[#9f5396]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-[#9f5396]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-gradient-to-r from-[#9f5396]/20 to-[#9f5396]/40 flex items-center justify-center">
                <div className="h-24 w-24 bg-[#9f5396]/20 rounded-full flex items-center justify-center">
                  <svg className="h-12 w-12 text-[#9f5396]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2">Dr. Majid Fekri</h3>
                <p className="text-lg font-medium text-muted-foreground mb-4">Co-Founder and CTO</p>
                <p className="text-base mb-4">With 12 years of experience in data science and AI, Dr. Fekri holds a PhD in Atmospheric Sciences from McGill University. His blend of scientific knowledge and practical data science expertise drives our technological innovations.</p>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-[#9f5396]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-[#9f5396]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section - Enhanced */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Community Initiatives</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We're committed to advancing AI knowledge and creating opportunities for the next generation of innovators.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Edge AI Engineering Course</h3>
                <p className="text-base mb-4">A self-paced program covering secure AI infrastructure, edge compute architecture, model optimization, and privacy-preserving techniques.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#9f5396]/10 text-[#9f5396] text-xs font-medium px-2.5 py-0.5 rounded">Online</span>
                  <span className="bg-[#9f5396]/10 text-[#9f5396] text-xs font-medium px-2.5 py-0.5 rounded">Self-paced</span>
                  <span className="bg-[#9f5396]/10 text-[#9f5396] text-xs font-medium px-2.5 py-0.5 rounded">Certificate</span>
                </div>
                <Button variant="outline" className="w-full">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">GenAI Genesis Hackathon</h3>
                <p className="text-base mb-4">Canada's largest AI hackathon (March 21-23, 2025) bringing together developers and researchers to create solutions using AI, with opportunities for seed funding and mentorship.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#9f5396]/10 text-[#9f5396] text-xs font-medium px-2.5 py-0.5 rounded">In-person</span>
                  <span className="bg-[#9f5396]/10 text-[#9f5396] text-xs font-medium px-2.5 py-0.5 rounded">Prizes</span>
                  <span className="bg-[#9f5396]/10 text-[#9f5396] text-xs font-medium px-2.5 py-0.5 rounded">Funding</span>
                </div>
                <Button variant="outline" className="w-full">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}