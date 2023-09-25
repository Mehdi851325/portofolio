
//components
import { VStack } from '@chakra-ui/react';
import Secproject1 from './Secproject1';
import Secproject2 from './Secproject2';
import Secproject3 from './SecProject3';
import SecProjectNew from './SecProjectNew';

const SecWork = () => {

  return (
    <VStack w={'100%'} >
        <SecProjectNew />
        <Secproject1 />
        <Secproject2 />
        <Secproject3 />
    </VStack>
  )
}

export default SecWork