import { Text } from 'react-native'

interface Props {
    children: string;
  }
  
export default function FileNameText({children}: Props) {
    return (
        <Text>{children}</Text>
    )
}