import Link from "next/link";
import Image from "next/image";
import { FileText, Linkedin, Twitter } from "lucide-react";
import { ContactModal } from "@/components/contact-modal";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-md">
                <Image
                  src="/images/topnotch-logo.png"
                  alt="TopNotch Dev Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg">TopNotch Dev</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering enterprises with AI, Automation, and Data Science solutions.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Team</Link></li>
                <li><ContactModal><button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</button></ContactModal></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Automation</Link></li>
                <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Data Science</Link></li>
                <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI & ML</Link></li>
                <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Full Stack Dev</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TopNotch Dev Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/company/topnotch-dev" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}