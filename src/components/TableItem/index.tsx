import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>...</C.TableColumn>
      <C.TableColumn>{item.category}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>R$ {item.value}</C.TableColumn>
    </C.TableLine>
  )
}