import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullname, email, phone, guests, date, time, request: specialRequest } = body;

    // Validation
    if (!fullname || !email || !phone || !guests || !date || !time) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const bookingId = `DIV-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      success: true,
      message: "Reservation confirmed successfully.",
      data: {
        bookingId,
        fullname,
        email,
        phone,
        guests,
        date,
        time,
        specialRequest: specialRequest || "None",
        status: "CONFIRMED",
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error processing reservation." },
      { status: 500 }
    );
  }
}
