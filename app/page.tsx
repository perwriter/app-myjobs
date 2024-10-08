import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-800 mb-4">ApplyLikeMe</h1>
          <p className="text-xl text-gray-600">Your Personal Job Application Assistant</p>
        </header>

        <main className="max-w-3xl mx-auto text-center">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Streamline Your Job Search Journey</h2>
            <p className="text-lg text-gray-600 mb-6">
              ApplyLikeMe is your all-in-one platform for managing job applications, tracking progress, and boosting your career opportunities. Say goodbye to scattered spreadsheets and hello to organized success!
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/auth/signin">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
                  Register
                </Button>
              </Link>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Applications</h3>
              <p className="text-gray-600">Keep all your job applications organized in one place.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Monitor Progress</h3>
              <p className="text-gray-600">Stay on top of your application statuses and next steps.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Boost Your Career</h3>
              <p className="text-gray-600">Gain insights to improve your job search strategy.</p>
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center text-gray-600">
          <p>&copy; 2024 ApplyLikeMe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}