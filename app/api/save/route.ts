import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const jsonData = JSON.stringify(data, null, 2);
    const fileContent = `export const timelineData = ${jsonData};`;
    
    const filePath = path.join(process.cwd(), 'data', 'timeline-data.ts');
    await writeFile(filePath, fileContent, 'utf8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}