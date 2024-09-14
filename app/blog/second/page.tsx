import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function SecondBlogPostLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                The Future of Web3 Development
              </CardTitle>
              <div className="flex items-center space-x-4 mt-4">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Author"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    Published on May 15, 2023
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Blog post cover image"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2 className="text-2xl font-bold mt-6 mb-4">
                  The Rise of AI in Web Development
                </h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Automated code generation</li>
                  <li>Intelligent debugging assistants</li>
                  <li>Personalized user experiences</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=80&width=80"
                    alt="Author"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    Web Developer & AI Enthusiast
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                John is a seasoned web developer with over 10 years of
                experience in creating innovative web solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Related Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-sm font-medium hover:underline">
                    10 Essential Tools for Modern Web Development
                  </a>
                  <p className="text-sm text-muted-foreground">May 10, 2023</p>
                </li>
                <Separator className="my-2" />
                <li>
                  <a href="#" className="text-sm font-medium hover:underline">
                    The Impact of WebAssembly on Frontend Development
                  </a>
                  <p className="text-sm text-muted-foreground">May 5, 2023</p>
                </li>
                <Separator className="my-2" />
                <li>
                  <a href="#" className="text-sm font-medium hover:underline">
                    Mastering CSS Grid: A Comprehensive Guide
                  </a>
                  <p className="text-sm text-muted-foreground">
                    April 28, 2023
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
