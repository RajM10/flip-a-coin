import prisma from "@/lib/prisma";
import SuperImp from "@/helper/SuperImp";

export async function POST() {
  try {
    const result = SuperImp();

    // Upsert and atomically increment counters
    const updated = await prisma.tossHistory.upsert({
      where: { id: 1 },
      update: {
        toss: { increment: 1 },
        head: result === "heads" ? { increment: 1 } : undefined,
        tail: result === "tails" ? { increment: 1 } : undefined,
      },
      create: {
        id: 1,
        toss: BigInt(1),
        head: result === "heads" ? BigInt(1) : BigInt(0),
        tail: result === "tails" ? BigInt(1) : BigInt(0),
      },
      select: { head: true, tail: true, toss: true },
    });

    return new Response(
      JSON.stringify({
        result,
        stats: {
          head: Number(updated.head),
          tail: Number(updated.tail),
          toss: Number(updated.toss),
        },
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to record toss" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
