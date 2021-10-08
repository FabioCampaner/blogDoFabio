import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertaComponent } from '../alerta/alerta.component';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }
  private showAlert(message: string, type: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message
  }
  showAlertDanger(msg: string) {
    this.showAlert(msg, 'danger')
  }
  showAlertSuccess(msg: string) {
    this.showAlert(msg, 'success')
  }
  showAlertInfo(msg: string) {
    this.showAlert(msg, 'info')
  }
}
