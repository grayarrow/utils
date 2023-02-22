import { safeArray } from '../index'
import { IDashboardScreenSetting, IDashboardSetting } from './tp-items'

export default class DashboardSetting implements IDashboardSetting {
  screens: IDashboardScreenSetting[] = []

  constructor(screens: IDashboardScreenSetting[] = []) {
    this.screens = safeArray(screens)
  }

  get screenNames() {
    return safeArray(this.screens).map((x) => x.name)
  }
}
