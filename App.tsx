import React from 'react';

import {Label, SafeAreaView} from './src/components/Home/styled';
import { Login, Validations } from './src/components/Home/Home';

export default function App() {
  return (
    <SafeAreaView>
      <Label>Sistema de Gestão de Ensino</Label>
      <Login name='user@email.com' password='********' />
      <Validations />
    </SafeAreaView>
  );
}
