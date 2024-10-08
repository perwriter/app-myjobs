import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import JobApplication from '@/models/JobApplication'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { userId } = params

  try {
    const applications = await JobApplication.findAll({ where: { user_id: userId } })
    return NextResponse.json(applications)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch job applications' }, { status: 500 })
  }
}

export async function POST(req: NextRequest, { params }: { params: { userId: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { userId } = params
  const data = await req.json()

  try {
    const newApplication = await JobApplication.create({
      ...data,
      user_id: userId,
    })
    return NextResponse.json(newApplication, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create job application' }, { status: 500 })
  }
}