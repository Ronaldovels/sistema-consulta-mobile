/**
 * Exportacao centralizada dos estilos do projeto (barrel)
 *
 * Permite importar assim:
 * import { homeScreenStyles } from "../styles";
 *
 * Em vez de:
 * import { styles } from "../styles/homeScreen.styles";
 *
 * Cada arquivo *.styles.ts exporta `styles`, entao aqui damos um apelido
 * para cada um e evitamos colisao de nomes.
 */

// Componentes
export { styles as consultaCardStyles } from "./consultaCard.styles";

// Telas - geral
export { styles as homeScreenStyles } from "./homeScreen.styles";

// Telas - fluxo do medico
export { styles as loginMedicoStyles } from "./loginMedico.styles";
export { styles as cadastroMedicoStyles } from "./cadastroMedico.styles";
export { styles as perfilMedicoStyles } from "./perfilMedico.styles";
export { styles as consultasMedicoStyles } from "./consultasMedico.styles";

// Telas - fluxo do paciente
export { styles as loginPacienteStyles } from "./loginPaciente.styles";
export { styles as cadastroPacienteStyles } from "./cadastroPaciente.styles";
export { styles as escolhaEspecialidadeStyles } from "./escolhaEspecialidade.styles";
export { styles as escolhaMedicoStyles } from "./escolhaMedico.styles";
export { styles as agendarConsultaStyles } from "./agendarConsulta.styles";
export { styles as minhasConsultasStyles } from "./minhasConsultas.styles";
