'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export const createKota = async (formData: FormData) => {
  await prisma.kota.create({
    data: {
      nama: formData.get('nama') as string,
      negara: formData.get('negara') as string,
      benua: formData.get('benua') as string,
    },
  });

  revalidatePath('/kota');
};

export const deleteKota = async (formData: FormData) => {
  await prisma.kota.delete({
    where: { id: parseInt(formData.get('id') as string) },
  });

  revalidatePath('/kota');
};

export const updateKota = async (formData: FormData) => {
  const id = parseInt(formData.get('id') as string);
  await prisma.kota.update({
    where: { id },
    data: {
      nama: formData.get('nama') as string,
      negara: formData.get('negara') as string,
      benua: formData.get('benua') as string,
    },
  });
  revalidatePath('/kota');
};
