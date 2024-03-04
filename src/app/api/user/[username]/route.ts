import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest,context : any) {
    // const data = await request.json()
    const exampleData = [
        {
            "name" : "Pittaya",
            "age" : 20
        },
        {
            "name" : "Punnyo",
            "age" : 25
        }
    ]
    const { params } = context 
    const mock = exampleData.filter(e => params.username === e.name.toString())

    return (
      NextResponse.json(
            mock
      )
    )
  }
  