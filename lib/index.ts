import { App } from 'vue'
import { Button } from '../packages/button'
import { ButtonGroup } from '../packages/button-group'
import { DateRange } from '../packages/date-range'
import { Icon } from '../packages/icon'
import { Label } from '../packages/label'
import { Pagination } from '../packages/pagination'
import { Progress } from '../packages/progress'
import { Sidenav } from '../packages/sidenav'
import { SidenavItem } from '../packages/sidenav-item'
import { SidenavSubitems } from '../packages/sidenav-subitems'
import { Subnav } from '../packages/subnav'
import { SubnavItem } from '../packages/subnav-item'
import '@primer/css/index.scss'

const components = [
  Button,
  ButtonGroup,
  DateRange,
  Icon,
  Label,
  Pagination,
  Progress,
  Sidenav,
  SidenavItem,
  SidenavSubitems,
  Subnav,
  SubnavItem
]

export const install = function (app: App, opts = {}) {
  components.forEach((component)=>{
    app.component(component.name, component);
  })
}
export const version = '0.1.2'

