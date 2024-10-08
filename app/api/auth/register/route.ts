import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import User from '@/models/User'

export async function POST(req: NextRequest) {
  const { user_name, email, password } = await req.json()

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = await User.create({
      user_name,
      email,
      password: hashedPassword,
    })

    return NextResponse.json({ message: 'User created successfully', userId: newUser.id }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 })
  }
}