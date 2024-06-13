import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid';

import SoloSafeArchitecture from '../../../assets/img/architecture.jpeg';

/* eslint-disable no-unused-vars */
const features = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus.'
      + ' Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
];
/* eslint-enable no-unused-vars */

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-solo-safe-1">SoloSafe</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transact offline with confidence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SoloSafe is a simple, secure, and reliable way to transact offline.
            Using the Zero Knowledge Proof (ZKP) technology and the power of Starknet,
            SoloSafe ensures that your transactions are secure over the internet or bluetooth.
          </p>

          <p className="my-8">
            <a href="https://laced-eggnog-ce7.notion.site/SoloSafe-Enabling-Secure-Offline-Payments-in-Urban-and-Rural-Environments-465949692768412fae371a7920c8e508" className="bg-solo-safe-1 text-white px-4 py-2 rounded-md">Read our whitepaper</a>
          </p>

          <div className="text-center">
            <img src={SoloSafeArchitecture} className="w-[300px] md:w-[500px] inline" alt="SoloSafe architecture" />
          </div>
        </div>
        {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base
                               font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href}
                       className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  );
}
