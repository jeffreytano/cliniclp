'use client'

export function Location() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Location</h2>
            <p className="text-gray-600 mb-4">
              岐阜市芥見南山1丁目86-1
            </p>
            <p className="text-gray-600 mb-8">
              広い駐車場を完備しておりますので、お車でもご来院いただきやすい、広い駐車場を完備しております。
            </p>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.8767037749465!2d136.7892!3d35.4234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI1JzM0LjIiTiAxMzbCsDQ3JzIxLjEiRQ!5e0!3m2!1sen!2sjp!4v1620000000000!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

