import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-protocolo-eletronico',
  templateUrl: 'protocolo-eletronico.html'
})
export class ProtocoloEletronicoPage {

  protSolicitante: string;
  protOutros: number;
  protAlunoRA: number;
  protFuncionario: number;
  protNumero: number;
  protocoloResult: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) { }

  buscarProtocolo() : void {
    
    let url = '';
    
    switch (this.protSolicitante) {
      case '0':
				url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/consulta-protocolo?protoc_pessoa="+this.protSolicitante+"&protoc_aluno="+this.protAlunoRA+"&protoc_num="+this.protNumero;
				break;
			case '1':
				url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/consulta-protocolo?protoc_pessoa="+this.protSolicitante+"&protoc_funcionario="+this.protFuncionario+"&protoc_num="+this.protNumero;
				break;
			case '2':
				url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/consulta-protocolo?protoc_pessoa="+this.protSolicitante+"&protoc_outros="+this.protOutros+"&protoc_num="+this.protNumero;
				break;
		} // End switch	

    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
            this.protocoloResult = data;
            console.log(data);
      },
      err => {
        console.log(err);
      });

  } //End buscarProtocolo()

}
