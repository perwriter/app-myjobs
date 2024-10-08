import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import Profile from '@/models/Profile'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { userId } = params

  try {
    const profile = await Profile.findOne({ where: { user_id: userId } })
    if (profile) {
      return NextResponse.json(profile)
    } else {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { userId } = params
  const data = await req.json()

  try {
    const [updatedRowsCount, [updatedProfile]] = await Profile.update(data, {
      where: { user_id: userId },
      returning: true,
    })

    if (updatedRowsCount > 0) {
      return NextResponse.json(updatedProfile)
    } else {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}