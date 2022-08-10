import { CheckIcon } from "@heroicons/react/outline"

const tiers = [
  {
    name: 'En ligne',
    href: 'https://wa.me/+243978154329',
    price: 75,
    description: "La formation se passe en ligne en live.  2 heures par jour",
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
    ],
  },
  {
    name: 'En presentielle',
    href: 'https://wa.me/+243978154329',
    price: 100,
    description: 'Nous ne recevons que 5 personnes au sein de nos locaux à Butembo',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
    ],
  },
]

export default function PricingSection() {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-primary uppercase tracking-wider">Tarif</h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Investissez à vous
            </p>
            <p className="text-xl text-gray-300">
              pour votre indépendance
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-50 text-gray-900"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${tier.price}
                    </div>
                    <p className="mt-5 text-xl text-gray-500">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-full shadow">
                      <a
                        href={tier.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-xl font-medium rounded-full text-primary bg-gray-900 hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Inscrivez-vous!
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="border-l-8 border-l-primary bg-gray-900 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Réduction
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-100">
                Nous offrons aux 10 premiers inscrits une <span className="font-bold text-primary">réduction de 15$</span> à chaque personne qui va s’inscrire à la formation en ligne avant le 25 Août. Soit <span className="text-primary">60$</span> cash.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="https://wa.me/+243978154329"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center animate-pulse px-5 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-50"
                >
                  Profiter de l&apos;occation
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}