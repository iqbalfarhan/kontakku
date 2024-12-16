import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';
import { PrismaClient } from '@prisma/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CreateForm from '@/components/kontak/CreateForm';
import KontakTableRow from '@/components/kontak/KontakTableRow';

const prisma = new PrismaClient();

const HomePage = async () => {
  const data = await prisma.kontak.findMany();

  return (
    <div className='max-w-5xl mx-auto min-h-screen space-y-6 p-5'>
      <Card className='bg-white'>
        <CardHeader>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <CardTitle>Kontakku</CardTitle>
              <CardDescription>Kontakku</CardDescription>
            </div>
            <CreateForm />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>No Telepon</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((kontak) => (
                <KontakTableRow kontak={kontak} key={kontak.id} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
