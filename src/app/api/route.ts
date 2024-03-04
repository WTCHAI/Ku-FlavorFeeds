import { NextRequest , NextResponse } from 'next/server'
 
export async function GET() {
  return (
    NextResponse.json({
        "date" : new Date().toLocaleString('en-US',{
            timeZone : 'Asia/Bangkok'
        })
    })
  )
}

 
  export async function PUT(request: NextRequest) {
    const token = request.cookies.get('token')
    return (
      NextResponse.json({
          "helloo" : "test"
      })
    )
  }
  
  export async function DELETE(request: NextRequest) {
    const token = request.cookies.get('token')
    return (
      NextResponse.json({
          "helloo" : "test"
      })
    )
  }

          