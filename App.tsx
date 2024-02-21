import React from 'react';

import { SafeAreaView, Text} from './src/components/Home/styled';
import { HomeCard } from './src/components/Home/Home';
import { Copyright } from '@/components/Home/Home.util';

export default function App() {
  return (
    <SafeAreaView>
      <HomeCard />
      <Copyright />
    </SafeAreaView>
  );
}
