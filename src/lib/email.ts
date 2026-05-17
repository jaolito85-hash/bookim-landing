import { Resend } from "resend"

// Lazy: only instantiate when actually sending an email so the module
// can be imported (e.g. during build) without a RESEND_API_KEY.
function getResend(): Resend {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    throw new Error("RESEND_API_KEY não configurada")
  }
  return new Resend(key)
}

const FROM_EMAIL = "Bookim <nao-responda@bookim.com.br>"

export async function sendWelcomeEmail(params: {
  to: string
  name: string
  tempPassword: string
  planType: "monthly" | "annual"
}) {
  const planLabel = params.planType === "monthly" ? "Mensal" : "Anual"

  const { data, error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: params.to,
    subject: "Bem-vindo ao Bookim! Seus dados de acesso",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #1D1D1F;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 8px;">Bem-vindo ao Bookim!</h1>
          <p style="color: #86868B; font-size: 15px; margin: 0;">Sua assinatura ${planLabel} foi confirmada.</p>
        </div>

        <div style="background: #F8F9FA; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <p style="font-size: 14px; color: #86868B; margin: 0 0 16px;">Seus dados de acesso:</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${params.to}</p>
          <p style="margin: 0;"><strong>Senha temporária:</strong> <code style="background: #E5E5EA; padding: 2px 8px; border-radius: 4px; font-size: 16px; letter-spacing: 1px;">${params.tempPassword}</code></p>
        </div>

        <div style="text-align: center; margin-bottom: 24px;">
          <a href="https://www.bookim.com.br" style="display: inline-block; background: #2D4057; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 15px;">
            Acessar o Bookim
          </a>
        </div>

        <p style="font-size: 13px; color: #86868B; text-align: center;">
          Por segurança, altere sua senha no primeiro acesso.
        </p>

        <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 32px 0 16px;" />
        <p style="font-size: 12px; color: #A1A1A6; text-align: center; margin: 0;">
          Bookim — Estude medicina com inteligência.
        </p>
      </div>
    `,
  })

  if (error) {
    throw new Error(`Falha ao enviar email: ${error.message}`)
  }
  return data
}

export async function sendSubscriptionCancelledEmail(params: {
  to: string
  name: string
}) {
  const { data, error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: params.to,
    subject: "Sua assinatura do Bookim foi cancelada",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #1D1D1F;">
        <h2 style="font-size: 20px; font-weight: 700;">Olá, ${params.name}.</h2>
        <p style="color: #86868B; line-height: 1.6;">
          Sua assinatura do Bookim foi cancelada. Você ainda pode acessar o app até o final do período já pago.
        </p>
        <p style="color: #86868B; line-height: 1.6;">
          Se isso foi um engano, entre em contato conosco.
        </p>
        <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 32px 0 16px;" />
        <p style="font-size: 12px; color: #A1A1A6; text-align: center; margin: 0;">
          Bookim — Estude medicina com inteligência.
        </p>
      </div>
    `,
  })

  if (error) {
    throw new Error(`Falha ao enviar email: ${error.message}`)
  }
  return data
}

export async function sendWaitlistConfirmationEmail(params: {
  to: string
  name: string
  position: number
}) {
  const isFounder = params.position <= 1000
  const founderBadge = isFounder
    ? `<div style="background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; text-align: center;">
        <span style="color: #059669; font-weight: 700; font-size: 14px;">Vaga de fundador garantida — preço congelado!</span>
      </div>`
    : ""

  const shareText = encodeURIComponent(
    "Acabei de entrar na lista de espera do Bookim, um app de estudos com IA pra medicina e odonto! Entra também: https://www.bookim.com.br/lista-de-espera?utm_source=whatsapp&utm_medium=referral&utm_campaign=waitlist-share"
  )

  const unsubscribeUrl = `https://www.bookim.com.br/lista-de-espera?unsubscribe=${encodeURIComponent(params.to)}`
  const founderText = isFounder
    ? "\n\n>> Vaga de fundador garantida — preço congelado para sempre!\n"
    : ""

  const plainText = `Olá, ${params.name}!

Sua inscrição na lista de espera do Bookim foi confirmada.

Sua posição: #${params.position}${founderText}

Vamos te avisar assim que o Bookim estiver pronto para você. Enquanto isso, se quiser compartilhar com seus colegas de turma, acesse:
https://www.bookim.com.br/lista-de-espera

---
Você recebeu este email porque se inscreveu na lista de espera do Bookim em www.bookim.com.br.
Seus dados estão protegidos conforme a LGPD. Política de Privacidade: https://www.bookim.com.br/privacidade
Para remover seus dados, responda este email ou escreva para contato@bookim.com.br.

Bookim — Estudo com IA para medicina e odontologia
www.bookim.com.br`

  const { data, error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: params.to,
    replyTo: "contato@bookim.com.br",
    subject: `Sua inscrição no Bookim foi confirmada — posição #${params.position}`,
    text: plainText,
    headers: {
      "List-Unsubscribe": `<${unsubscribeUrl}>, <mailto:contato@bookim.com.br?subject=unsubscribe>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      "X-Entity-Ref-ID": `waitlist-${params.position}`,
    },
    tags: [
      { name: "category", value: "waitlist-confirmation" },
      { name: "is_founder", value: isFounder ? "yes" : "no" },
    ],
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 24px; color: #1D1D1F; background: #FFFFFF;">
        <!-- Logo header -->
        <div style="text-align: center; margin-bottom: 24px;">
          <img
            src="https://www.bookim.com.br/api/email-logo"
            alt="Bookim"
            width="64"
            height="64"
            style="display: inline-block; width: 64px; height: 64px; border-radius: 14px;"
          />
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 20px; font-weight: 700; color: #2D4057; margin-top: 12px; letter-spacing: -0.02em;">
            Bookim
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 8px; color: #1D1D1F;">Você está na lista!</h1>
          <p style="color: #86868B; font-size: 15px; margin: 0;">Obrigado por se inscrever, ${params.name}.</p>
        </div>

        <div style="background: #F8F9FA; border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
          <p style="font-size: 14px; color: #86868B; margin: 0 0 8px;">Sua posição na lista de espera:</p>
          <p style="font-size: 48px; font-weight: 800; color: #2D4057; margin: 0; letter-spacing: -2px;">#${params.position}</p>
        </div>

        ${founderBadge}

        <p style="color: #86868B; line-height: 1.6; font-size: 14px; text-align: center; margin-bottom: 24px;">
          Vamos te avisar assim que o Bookim estiver pronto para você.
          Enquanto isso, compartilhe com seus colegas de turma!
        </p>

        <div style="text-align: center; margin-bottom: 24px;">
          <a href="https://wa.me/?text=${shareText}" style="display: inline-block; background: #25D366; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 15px;">
            Compartilhar no WhatsApp
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #E5E5EA; margin: 32px 0 16px;" />
        <p style="font-size: 11px; color: #A1A1A6; text-align: center; margin: 0 0 8px; line-height: 1.5;">
          Você recebeu este email porque se inscreveu na lista de espera do Bookim em
          <a href="https://www.bookim.com.br" style="color: #A1A1A6;">www.bookim.com.br</a>.
          Seus dados estão protegidos conforme a
          <a href="https://www.bookim.com.br/privacidade" style="color: #A1A1A6; text-decoration: underline;">Política de Privacidade</a>
          (LGPD).
        </p>
        <p style="font-size: 11px; color: #A1A1A6; text-align: center; margin: 0; line-height: 1.5;">
          Não quer mais receber? <a href="${unsubscribeUrl}" style="color: #A1A1A6;">Cancelar inscrição</a> ou responda este email com "remover".
        </p>
      </div>
    `,
  })

  if (error) {
    throw new Error(`Falha ao enviar email de waitlist: ${error.message}`)
  }
  return data
}
