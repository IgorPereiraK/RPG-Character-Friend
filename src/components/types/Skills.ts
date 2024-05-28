export type Skills = {
    name: string
    image: string
    magic: string
    description: React.ReactNode | string
    type: React.ReactNode | string
    mana?: React.ReactNode | string
    onClick?: () => void
    clickGurenPassiva?: React.ReactNode | string
    borderColorGurenPassiva?: string | null
    clickGurenUlt?: React.ReactNode | string
    borderColorGurenUlt?: string | null
    borderColorGurenArmaduraDarkin?: string | null
    borderColorGurenEmpunhaduraDupla?: string | null
    clickGurenFocoFarao?: React.ReactNode | string
    borderColorGurenFocoFarao?: string | null
    borderColorGurenEvolucaoEspirirual?: string | null
    borderColorGurenFluxoDaAgua?: string | null
    fluxoDaAguaRounds?: React.ReactNode | string
    buttonBorderColorGurenKarma?: string | null
}