import React from 'react';
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
import { Button } from '../ui/button';
import { createKontak } from '@/app/actions/kontak';
import { Input } from '../ui/input';
import { PlusCircle } from 'lucide-react';

const CreateForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='default' size='icon'>
          <PlusCircle />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form kontak</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <form action={createKontak} className='space-y-6'>
          <div className='space-y-3'>
            <Input name='name' type='text' placeholder='Nama kontak' />
            <Input name='phone' type='phone' placeholder='Nomor telepon' />
            <Input name='email' type='email' placeholder='Email' />
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
  );
};

export default CreateForm;
