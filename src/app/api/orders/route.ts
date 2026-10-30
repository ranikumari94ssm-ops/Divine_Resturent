import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, customerPhone, orderType, deliveryAddress, items, grandTotal } = body;

    if (!customerName || !customerPhone || !items || !items.length) {
      return NextResponse.json(
        { success: false, message: "Missing order or customer information." },
        { status: 400 }
      );
    }

    const orderId = `DVR-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      orderId,
      message: "Order placed successfully.",
      order: {
        orderId,
        customerName,
        customerPhone,
        orderType,
        deliveryAddress: deliveryAddress || null,
        itemsCount: items.length,
        grandTotal,
        status: "PREPARING",
        estimatedMinutes: 30,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error processing order." },
      { status: 500 }
    );
  }
}
