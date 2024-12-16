'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function createKontak(formData: FormData) {
  await prisma.kontak.create({
    data: {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    },
  });

  revalidatePath('/');
}

export async function updateKontak(formData: FormData) {
  const idString = formData.get('id'); // Ambil nilai dari formData
  if (!idString || typeof idString !== 'string') {
    throw new Error('ID tidak valid atau tidak ditemukan.');
  }

  const id = parseInt(idString, 10); // Konversi ke number
  if (isNaN(id)) {
    throw new Error('ID harus berupa angka.');
  }

  await prisma.kontak.update({
    where: {
      id: id,
    },
    data: {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    },
  });

  revalidatePath('/');
}

export async function deleteKontak(formData: FormData) {
  const idString = formData.get('id'); // Ambil nilai dari formData
  if (!idString || typeof idString !== 'string') {
    throw new Error('ID tidak valid atau tidak ditemukan.');
  }

  const id = parseInt(idString, 10); // Konversi ke number
  if (isNaN(id)) {
    throw new Error('ID harus berupa angka.');
  }

  await prisma.kontak.delete({
    where: {
      id: id,
    },
  });

  revalidatePath('/');
}
