import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import JobCard from '~/components/JobCard.vue'

const baseJob = {
  slug: 'senior-backend-engineer',
  title: 'Senior Backend Engineer',
  department: 'Engineering',
  departmentClass: 'bg-blue-100 text-blue-800',
  location: 'Remote',
  type: 'full-time',
  salary: '$80k - $110k',
  salaryPeriod: 'per year',
  description: 'Build and maintain our public API and admin tooling.',
  requirements: ['PHP', 'Laravel', 'MySQL'],
  is_featured: false,
}

describe('JobCard', () => {
  it('renders the job title, department, location and type', async () => {
    const wrapper = await mountSuspended(JobCard, {
      props: { job: baseJob },
    })

    expect(wrapper.text()).toContain('Senior Backend Engineer')
    expect(wrapper.text()).toContain('Engineering')
    expect(wrapper.text()).toContain('Remote')
    expect(wrapper.text()).toContain('full time')
  })

  it('links to the job detail page using the slug', async () => {
    const wrapper = await mountSuspended(JobCard, {
      props: { job: baseJob },
    })

    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => {
      expect(link.attributes('href')).toBe('/careers/senior-backend-engineer')
    })
  })

  it('truncates descriptions longer than 200 characters', async () => {
    const longDescription = 'x'.repeat(250)
    const wrapper = await mountSuspended(JobCard, {
      props: { job: { ...baseJob, description: longDescription } },
    })

    expect(wrapper.text()).toContain('x'.repeat(200) + '...')
    expect(wrapper.text()).not.toContain('x'.repeat(201))
  })

  it('shows the featured badge only when featured and not already in a featured list', async () => {
    const wrapper = await mountSuspended(JobCard, {
      props: { job: { ...baseJob, is_featured: true }, isFeatured: false },
    })

    expect(wrapper.text()).toContain('Featured')
  })

  it('hides the featured badge when isFeatured prop is already true', async () => {
    const wrapper = await mountSuspended(JobCard, {
      props: { job: { ...baseJob, is_featured: true }, isFeatured: true },
    })

    expect(wrapper.text()).not.toContain('⭐ Featured')
  })

  it('caps visible requirements to 5 (or 3 in a featured list) and shows a "+N more" tag', async () => {
    const manyRequirements = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const wrapper = await mountSuspended(JobCard, {
      props: { job: { ...baseJob, requirements: manyRequirements }, isFeatured: false },
    })

    expect(wrapper.text()).toContain('+2 more')
  })
})
