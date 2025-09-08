import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const row = await prisma.tossHistory.findUnique({ where: { id: 1 } });
    const stats = row ?? { head: BigInt(0), tail: BigInt(0), toss: BigInt(0) };
    return new Response(
      JSON.stringify({
        head: Number(stats.head),
        tail: Number(stats.tail),
        toss: Number(stats.toss),
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch stats" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
