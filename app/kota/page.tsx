import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PrismaClient } from '@prisma/client';
import React from 'react';
import { createKota, deleteKota, updateKota } from './actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const prisma = new PrismaClient();

const KotaPage = async () => {
  const data = await prisma.kota.findMany();

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nama kota</TableHead>
            <TableHead>Negara</TableHead>
            <TableHead>Benua</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((kota) => (
            <TableRow key={kota.id}>
              <TableCell>{kota.id}</TableCell>
              <TableCell>{kota.nama}</TableCell>
              <TableCell>{kota.negara}</TableCell>
              <TableCell>{kota.benua}</TableCell>
              <TableCell>
                <div className='space-x-1 flex flex-row'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size={'sm'}>edit</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit kota</DialogTitle>
                      </DialogHeader>
                      <form action={updateKota} className='space-y-6'>
                        <Input type='hidden' defaultValue={kota.id} name='id' />
                        <Input
                          name='nama'
                          placeholder='Nama kota'
                          defaultValue={kota.nama}
                        />
                        <Input
                          name='negara'
                          placeholder='nama negara'
                          defaultValue={kota.negara}
                        />
                        <Input
                          name='benua'
                          placeholder='nama benua'
                          defaultValue={kota.benua}
                        />
                        <DialogFooter>
                          <Button type='submit'>Simpan</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <form action={deleteKota}>
                    <input type='hidden' name='id' value={kota.id} />
                    <Button size={'sm'}>hapus</Button>
                  </form>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog>
        <DialogTrigger asChild>
          <Button size={'sm'}>Tambah kota</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tambah kota</DialogTitle>
          </DialogHeader>
          <form action={createKota} className='space-y-6'>
            <Input name='nama' placeholder='Nama kota' />
            <Input name='negara' placeholder='nama negara' />
            <Input name='benua' placeholder='nama benua' />
            <DialogFooter>
              <Button type='submit'>Simpan</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default KotaPage;
