package Prova;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Gasolina coleta = null;
		Controlador control = new Controlador();
		// coletas
		coleta = new Gasolina();
		coleta.nomePosto = "Pinheir�o";
		coleta.valor = 4.64;
		control.salvar(coleta);
		
		coleta = new Gasolina();
		coleta.nomePosto = "Petrobras";
		coleta.valor = 4.85;
		control.salvar(coleta);
		
		coleta = new Gasolina();
		coleta.nomePosto = "Estrela";
		coleta.valor = 4.75;
		control.salvar(coleta);
		
		coleta = new Gasolina();
		coleta.nomePosto = "S�o Raimundo";
		coleta.valor = 4.65;
		control.salvar(coleta);
		
		control.precoMedio();
		control.imprimir();
		control.menorMaior();
		

	}

}
