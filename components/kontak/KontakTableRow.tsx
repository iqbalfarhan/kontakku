import React from 'react';
import { TableCell, TableRow } from '../ui/table';
import { Kontak } from '@prisma/client';
import { Button } from '../ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { deleteKontak, updateKontak } from '@/app/actions/kontak';
import { Input } from '../ui/input';

const KontakTableRow = ({ kontak }: { kontak: Kontak }) => {
  return (
    <TableRow>
      <TableCell>{kontak.id}</TableCell>
      <TableCell>{kontak.name}</TableCell>
      <TableCell>{kontak.email}</TableCell>
      <TableCell>{kontak.phone}</TableCell>
      <TableCell className='flex gap-2'>
        <Dialog>
          <DialogTrigger asChild>
            <Button type='button' size={'icon'} variant={'default'}>
              <Pencil className='h-5 w-5' />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Form kontak</DialogTitle>
              <DialogDescription>
                This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <form action={updateKontak} className='space-y-6'>
              <div className='space-y-3'>
                <input type='hidden' name='id' value={kontak.id} />
                <Input
                  name='name'
                  type='text'
                  placeholder='Nama kontak'
                  defaultValue={kontak.name}
                />
                <Input
                  name='phone'
                  type='phone'
                  placeholder='Nomor telepon'
                  defaultValue={kontak.phone}
                />
                <Input
                  name='email'
                  type='email'
                  placeholder='Email'
                  defaultValue={kontak.email}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant='outline'>Cancel</Button>
                </DialogClose>
                <Button>Submit</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <form action={deleteKontak}>
          <input type='hidden' name='id' value={kontak.id} />
          <Button type='submit' variant={'default'} size={'icon'}>
            <Trash2 />
          </Button>
        </form>
      </TableCell>
    </TableRow>
  );
};

export default KontakTableRow;
