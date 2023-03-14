import { Text } from 'react-native'

interface Props {
    children: string;
  }
  
export function FileNameText({children}: Props) {
    return (
        <Text>{children.substring(children.lastIndexOf('/') + 1)}</Text>
    )
}