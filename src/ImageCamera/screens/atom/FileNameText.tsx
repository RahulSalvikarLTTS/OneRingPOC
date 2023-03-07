import { Text } from 'react-native'

interface Props {
    children: string;
  }
  
export default function FileNameText({children}: Props) {
    return (
        <Text>{children.substring(children.lastIndexOf('/') + 1)}</Text>
    )
}